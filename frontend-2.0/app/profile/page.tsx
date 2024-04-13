'use client'

import { useEffect, useState } from "react"
import ProfileHeader from "../components/ProfileHeader";
import { useSession } from "next-auth/react";
import { fetchUser } from "../apis/fetchUser";
import { updateProfile } from "../apis/updateProfile";
import ErrorToast from "../components/ErrorToast";

const Profile = () => {
  const { data } = useSession();
  const [firstname, setFirstname] = useState<any>();
  const [lastname, setLastname] = useState<any>();
  const [username, setUsername] = useState<any>();
  const [email, setEmail] = useState<any>();
  const [skillOne, setSkillOne] = useState<any>();
  const [skillTwo, setSkillTwo] = useState<any>();
  const [skillThree, setSkillThree] = useState<any>();
  const [highestQual, setHighestQual] = useState<any>();
  const [aspiration, setAspiration] = useState<any>();
  const [age, setAge] = useState<any>();
  const [phone, setPhone] = useState<any>();
  const [home, setHome] = useState<any>();
  const [loading, setLoading] = useState<any>(true);
  const [buttonloading, setButtonLoading] = useState<any>(false);
  const [user, setUser] = useState<any>();
  const [toastMessage, setToastMessage] = useState<any>();
  useEffect(() => {
    const fetchUserData = async () => {
      const resp = await fetchUser({ userId: data?.user?.email });
      setUser(resp.data.user);
      setFirstname(resp.data.user.firstname);
      setLastname(resp.data.user.lastname);
      setUsername(resp.data.user.username);
      setEmail(resp.data.user.email);
      setAge(resp.data.user.age);
      setPhone(resp.data.user.phone);
      setAspiration(resp.data.user.aspiration);
      setHighestQual(resp.data.user.high_qual);
      setHome(resp.data.user.home);
      setSkillOne(resp.data.user.skill_one);
      setSkillTwo(resp.data.user.skill_two);
      setSkillThree(resp.data.user.skill_three);
      setLoading(false);
    }
    if (data) {
      fetchUserData();
    }
  }, [data])
  const updateProfileAction = async() => {
    setButtonLoading(true);
    setToastMessage(null);
    const resp = await updateProfile({userId: user?.id, firstname, lastname, age, phone, skillOne, skillTwo, skillThree, aspiration, highestQual, home})
    if(resp.status===200){
      setToastMessage('Profile Updated!');
      setFirstname(resp.data.user.firstname);
      setLastname(resp.data.user.lastname);
      setUsername(resp.data.user.username);
      setEmail(resp.data.user.email);
      setAge(resp.data.user.age);
      setPhone(resp.data.user.phone);
      setAspiration(resp.data.user.aspiration);
      setHighestQual(resp.data.user.high_qual);
      setHome(resp.data.user.home);
      setSkillOne(resp.data.user.skill_one);
      setSkillTwo(resp.data.user.skill_two);
      setSkillThree(resp.data.user.skill_three);
      setButtonLoading(false);
    }
    else{
      setButtonLoading(false);
      setToastMessage('Error Updating Profile!')
    }
  }
  return (
    <div className="flex flex-col">
      {loading ?
        <div className='flex flex-row mx-auto my-2 p-5'>
          <h1 className='mr-2'>Loading</h1>
          <span className="loading loading-spinner loading-sm"></span>
        </div>
        : <>
          {toastMessage && <ErrorToast text={toastMessage} type={toastMessage==='Profile Updated!'?true:false} position={true}/>}
          <ProfileHeader username={username} email={email} />
          <div className="w-full grid sm:grid-cols-2 grid-cols-1 gap-4 rounded-lg p-2 mt-4">
            <div className="flex sm:flex-row">
              <div className="w-1/3 w-ful bg-cyan-800 p-2 rounded-lg">
                <h1 className="text-white text-xs">First Name</h1>
              </div>
              <div className="w-2/3 w-ful flex rounded-lg">
                <input className="input ml-2 input-sm text-cyan-800 text-xs w-full mx-auto input-bordered" placeholder="First Name" value={firstname} onChange={(e)=>setFirstname(e.target.value)}/>
              </div>
            </div>
            <div className="flex sm:flex-row">
              <div className="w-1/3 w-ful bg-cyan-800 p-2 rounded-lg">
                <h1 className="text-white text-xs">Last Name</h1>
              </div>
              <div className="w-2/3 w-ful flex rounded-lg">
                <input className="input ml-2 input-sm text-cyan-800 text-xs w-full mx-auto input-bordered" placeholder="Last Name" value={lastname} onChange={(e)=>setLastname(e.target.value)}/>
              </div>
            </div>
            <div className="flex sm:flex-row">
              <div className="w-1/3 w-ful bg-cyan-800 p-2 rounded-lg">
                <h1 className="text-white text-xs">Age</h1>
              </div>
              <div className="w-2/3 w-ful flex rounded-lg">
                <input className="input ml-2 input-sm text-cyan-800 text-xs w-full mx-auto input-bordered" placeholder="Age" value={age} onChange={(e)=>setAge(e.target.value)}/>
              </div>
            </div>
            <div className="flex sm:flex-row">
              <div className="w-1/3 w-ful bg-cyan-800 p-2 rounded-lg">
                <h1 className="text-white text-xs">Phone</h1>
              </div>
              <div className="w-2/3 w-ful flex rounded-lg">
                <input className="input ml-2 input-sm text-cyan-800 text-xs w-full mx-auto input-bordered" placeholder="Phone" value={phone} onChange={(e)=>setPhone(e.target.value)}/>
              </div>
            </div>
            <div className="flex sm:flex-row">
              <div className="w-1/3 w-ful bg-cyan-800 p-2 rounded-lg">
                <h1 className="text-white text-xs">Aspiration</h1>
              </div>
              <div className="w-2/3 w-ful flex rounded-lg">
                <input className="input ml-2 input-sm text-cyan-800 text-xs w-full mx-auto input-bordered" placeholder="What is your vision?" value={aspiration} onChange={(e)=>setAspiration(e.target.value)}/>
              </div>
            </div>
            <div className="flex sm:flex-row">
              <div className="w-1/3 w-ful bg-cyan-800 p-2 rounded-lg">
                <h1 className="text-white text-xs">Highest Qualification</h1>
              </div>
              <div className="w-2/3 w-ful flex rounded-lg">
                <input className="input ml-2 input-sm text-cyan-800 text-xs w-full mx-auto input-bordered" placeholder="Highest Qualification" value={highestQual} onChange={(e)=>setHighestQual(e.target.value)}/>
              </div>
            </div>
            <div className="flex sm:flex-row">
              <div className="w-1/3 w-ful bg-cyan-800 p-2 rounded-lg">
                <h1 className="text-white text-xs">Primary Skill 1</h1>
              </div>
              <div className="w-2/3 w-ful flex rounded-lg">
                <input className="input ml-2 input-sm text-cyan-800 text-xs w-full mx-auto input-bordered" placeholder="One" value={skillOne} onChange={(e)=>setSkillOne(e.target.value)}/>
              </div>
            </div>
            <div className="flex sm:flex-row">
              <div className="w-1/3 w-ful bg-cyan-800 p-2 rounded-lg">
                <h1 className="text-white text-xs">Primary Skill 2</h1>
              </div>
              <div className="w-2/3 w-ful flex rounded-lg">
                <input className="input ml-2 input-sm text-cyan-800 text-xs w-full mx-auto input-bordered" placeholder="Two" value={skillTwo} onChange={(e)=>setSkillTwo(e.target.value)}/>
              </div>
            </div>
            <div className="flex sm:flex-row">
              <div className="w-1/3 w-ful bg-cyan-800 p-2 rounded-lg">
                <h1 className="text-white text-xs">Primary Skill 3</h1>
              </div>
              <div className="w-2/3 w-ful flex rounded-lg">
                <input className="input ml-2 input-sm text-cyan-800 text-xs w-full mx-auto input-bordered" placeholder="Three" value={skillThree} onChange={(e)=>setSkillThree(e.target.value)}/>
              </div>
            </div>
            <div className="flex sm:flex-row">
              <div className="w-1/3 w-ful bg-cyan-800 p-2 rounded-lg">
                <h1 className="text-white text-xs">Home</h1>
              </div>
              <div className="w-2/3 w-ful flex rounded-lg">
                <input className="input ml-2 input-sm text-cyan-800 text-xs w-full mx-auto input-bordered" placeholder="Home" value={home} onChange={(e)=>setHome(e.target.value)}/>
              </div>
            </div>
          </div>
            <button className="btn bg-cyan-400 hover:bg-cyan-400 text-white btn-sm m-auto mt-4 px-10" onClick={updateProfileAction}>Update Profile {buttonloading ? <span className="loading loading-spinner loading-xs"></span> : ''}</button>
        </>
      }
    </div>
  )
}

export default Profile