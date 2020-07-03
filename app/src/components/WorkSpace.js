import React,
    { useState,
      useEffect,
      useMemo,
      useCallback } from 'react';

import { createEditor,
        Transforms,
        Editor,
        Text } from 'slate';

import { Slate,Editable,withReact } from 'slate-react';

import { Heading1Element,DefaultElement } from './Elements';

function WorkSpace() {
    const editor = useMemo(() => withReact(createEditor()), [])
    const [ value,setValue ] = useState([{
        type: 'paragraph',
        children: [{ text: 'A line of text in a paragraph.' }],
      },
    ]);
    
    const handleChange = (newValue) => {
        setValue(newValue)
    }
    
    const handleKeyDown = (e) => {
        switch (e.key){
            case 'b':
                if(e.ctrlKey){
                    e.preventDefault();
                    const [match] = Editor.nodes(editor, {
                        match: n => n.type === 'heading1',
                      })
                    Transforms.setNodes(
                        editor,
                        { type: match ? 'paragraph' : 'heading1' },
                        { match: n => Editor.isBlock(editor,n) }
                      )
                }
        }
    }

    const renderElement = useCallback((props)=> {
        switch (props.element.type){
          case 'heading1':
            return <Heading1Element {...props} />
          default:
            return <DefaultElement {...props} />
        }
      },[])


    return (
        <div className = "workspace">
            
            <Slate editor = {editor} value = {value} onChange = {handleChange} >
                <Editable 
                    onKeyDown = { handleKeyDown }
                    renderElement = {renderElement}
                />
            </Slate>
        </div>
    )
}

export default WorkSpace
