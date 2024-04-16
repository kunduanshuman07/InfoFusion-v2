'use client'
import { CopyBlock, dracula, atomOneDark } from 'react-code-blocks';

interface props{
    code: string;
    showLineNumbers: boolean;
}

const ReactCodeBlock:React.FC<props> = ({code, showLineNumbers}) => {
  return (
    <CopyBlock
      text={code}
      language='jsx'
      wrapLongLines={true}
      theme={atomOneDark}
      showLineNumbers={showLineNumbers}
      codeBlock={false}

    />
  )
}

export default ReactCodeBlock