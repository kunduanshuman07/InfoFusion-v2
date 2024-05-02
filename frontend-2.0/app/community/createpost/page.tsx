'use client'

import { useSession } from "next-auth/react"
import { useEffect, useState } from "react";
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/themes/prism.css';
import TextEditor from "@/app/components/TextEditor";
import { fetchUser } from "@/app/apis/fetchUser";
import { createCommunityPost } from "@/app/apis/createCommunityPost";
import { useRouter } from "next/navigation";
const CreatePost = () => {
    const { data, status } = useSession();
    const [buttonLoading, setButtonLoading] = useState<any>(false);
    const [loading, setLoading] = useState<any>(true);
    const [auth, setAuth] = useState<any>(false);
    const [title, setTitle] = useState<any>();
    const [content, setContent] = useState<any>();
    const [tag_one, setTagOne] = useState<any>();
    const [tag_two, setTagTwo] = useState<any>();
    const [user, setUser] = useState<any>();
    const router = useRouter();
    const [code, setCode] = useState<any>(
        `function add(a, b) {\n  return a + b;\n}`
    );
    useEffect(() => {
        const fetchUserData = async () => {
            const resp = await fetchUser({ userId: data?.user?.email });
            if (resp.status === 200) {
              setUser(resp.data.user);
              setLoading(false);
            }
          }
        if (status === 'unauthenticated') {
            setAuth(false);
            setLoading(false);
        }
        else {
            fetchUserData();
            setAuth(true);
        }
    }, [status, data])
    const handleCreatePost = async() => {
        setButtonLoading(true);
        const postResp = await createCommunityPost({user_id:user?.id, username: user?.username, tag_one, tag_two, content, code, title});
        if(postResp.status==200){
            router.push('/community');
        }

    }
    return (
        <div className="flex flex-col">
            {loading && <div style={{ margin: "auto auto" }}><span className="loading text-cyan-700 loading-dots loading-lg"></span></div>}
            {!loading && !auth &&
                <div style={{ margin: "auto auto" }}>
                    <a className="text-sm text-cyan-700" href="/login">Please <span className="text-lg font-bold hover:underline">Sign In</span> to continue!</a>
                </div>
            }
            {!loading && auth &&
                <div className="flex flex-col w-full p-4">
                    <div className="w-full flex flex-col items-center mb-12 p-2">
                        <h1 className="text-2xl font-bold text-cyan-500">New Post ...</h1>
                        <div className="flex sm:flex-row flex-col">
                            <input placeholder="New Post Title" className="mt-2 sm:mx-2 mx-0 input input-sm input-bordered" value={title} onChange={(e)=>setTitle(e.target.value)}/>
                            <input placeholder="Tags - #1" className="mt-2 sm:mx-2 mx-0 input input-sm input-bordered" value={tag_one} onChange={(e)=>setTagOne(e.target.value)}/>
                            <input placeholder="Tags - #2" className="mt-2 sm:mx-2 mx-0 input input-sm input-bordered" value={tag_two} onChange={(e)=>setTagTwo(e.target.value)} />
                        </div>
                        <TextEditor content={content} setContent={setContent}/>
                    </div>
                    <div className="w-full flex flex-col mt-12">
                        <h1 className="text-xs text-center mb-2 text-slate-500 font-bold">Want to add codes? Write it below!</h1>
                        <Editor
                            value={code}
                            onValueChange={code => setCode(code)}
                            highlight={code => highlight(code, languages.javascript, 'javascript')}
                            padding={10}
                            style={{
                                fontFamily: '"Fira code", "Fira Mono", monospace',
                                fontSize: 12,
                                border: "1px solid #cbd5e1",
                                borderRadius: "10px"
                            }}
                        />
                        <button className='btn btn-sm mx-auto bg-cyan-800 text-white hover:bg-cyan-600 mt-4' onClick={handleCreatePost}>Create Post {buttonLoading && <span className="loading loading-spinner loading-xs"></span>}</button>
                    </div>
                </div>
            }
        </div>
    )
}

export default CreatePost