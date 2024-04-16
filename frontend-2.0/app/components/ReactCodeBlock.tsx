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
      wrapLongLines
      theme={atomOneDark}
      showLineNumbers={showLineNumbers}
    />
  )
}

export default ReactCodeBlock