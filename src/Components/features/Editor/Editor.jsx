import { useRef } from "react";

// Toast 에디터
import '@toast-ui/editor/dist/i18n/ko-kr';
import "@toast-ui/editor/dist/toastui-editor.css";
import { Editor } from "@toast-ui/react-editor";
import "prismjs/themes/prism.css";
import "@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css";
import codeSyntaxHighlight from "@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight-all.js";

import "tui-color-picker/dist/tui-color-picker.css";
import "@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css";

import colorSyntax from "@toast-ui/editor-plugin-color-syntax";
import styled from "styled-components";

export default function ToastEditor() {
  const editorRef = useRef();

  const onChange = () => {
    const data = editorRef.current.getInstance().getHTML();
    console.log(data);
  };

  // 파일 URL을 받아 글에 첨부하기
  const onUploadImage = async (blob, callback) => {
    const url = await uploadImage(blob);
    callback(url, 'alt text');    
    return false;
  };

  //S3 서버에 데이터 보내고 URL 받기
  const uploadImage = async (blob) => {
    return 0
  }

  return (
    <div>
      <Editor
        initialValue=" "
        placeholder="내용을 입력해주세요."
        previewStyle="vertical" // 미리보기 스타일 지정
        height="500px" // 에디터 창 높이
        initialEditType="markdown" // 초기 입력모드 설정(디폴트 markdown)
        onChange={onChange}
        toolbarItems={[
          // 툴바 옵션 설정
          ["heading", "bold", "italic", "strike"],
          ["hr", "quote"],
          ["ul", "ol", "task", "indent", "outdent"],
          ["table", "image", "link"],
          ["code", "codeblock"],
        ]}
        plugins={[codeSyntaxHighlight, colorSyntax]}
        hooks={{
          addImageBlobHook: onUploadImage
        }}
        language="ko-KR"
        ref={editorRef}
      />
      <StBtnBox>
        <StBtnSubmit>저장</StBtnSubmit>
        <StBtnCancel>뒤로가기</StBtnCancel>
      </StBtnBox>
    </div>
  );
}

const StBtnBox = styled.div`
  margin-top: 30px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: end;
`

const StBtnSubmit = styled.button`
margin-right: 30px;
`

const StBtnCancel = styled(StBtnSubmit)`
  margin-right: 15px;
`