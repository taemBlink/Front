import { useRef, useState } from "react";

// Toast 에디터
import "@toast-ui/editor/dist/i18n/ko-kr";
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
  const [title, setTitle] = useState("");
  const titleChangeHandler = (e) => {
    setTitle(e.target.value);
  };

  const [endDate, setEndDate] = useState("");
  const dateChangeHandler = (e) => {
    setEndDate(e.target.value);
  };

  const [selectedJob, setSelectedJop] = useState("");
  const handleJobChange = (e) => {
    setSelectedJop(e.target.value);
  };

  const editorRef = useRef();

  const onChange = () => {
    const data = editorRef.current.getInstance().getHTML();
    console.log(data);
  };

  // 파일 URL을 받아 글에 첨부하기
  const onUploadImage = async (blob, callback) => {
    const url = await uploadImage(blob);
    callback(url, "alt text");
    return false;
  };

  //S3 서버에 데이터 보내고 URL 받기
  const uploadImage = async (blob) => {
    return "URL"
  };

  return (
    <StContainer>
      <label>제목:</label>
      <input
        type="text"
        value={title}
        onChange={(e) => titleChangeHandler(e)}
      />
      <label>지역:</label>
      <input />
      <label>모집기한:</label>
      <input
        type="date"
        value={endDate}
        onChange={(e) => dateChangeHandler(e)}
      />
      <label>직군:</label>
      <select value={selectedJob} onChange={handleJobChange}>
        <option value="">선택해주세요</option>
        <option value="엔지니어링">엔지니어링</option>
        <option value="교육">교육</option>
        <option value="개발">개발</option>
        <option value="HR·경영지원">HR·경영지원</option>
      </select>
      <StEditorWrap>
        <Editor
          initialValue=" "
          placeholder="내용을 입력해주세요."
          previewStyle="vertical" // 미리보기 스타일 지정
          height="700px" // 에디터 창 높이
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
            addImageBlobHook: onUploadImage,
          }}
          language="ko-KR"
          ref={editorRef}
        />
      </StEditorWrap>
      <StBtnBox>
        <StBtnSubmit>저장</StBtnSubmit>
        <StBtnCancel>취소</StBtnCancel>
      </StBtnBox>
    </StContainer>
  );
}

const StBtnBox = styled.div`
  margin-top: 30px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: end;
`;

const StBtnSubmit = styled.button`
  margin-right: 30px;
  background-color: #da3238;
  border-color: #da3238;
  color: white;
  font-size: 17px;
  border: none;
  box-shadow: none;
  border-radius: 0;
  padding: 10px;
  width: 110px;
  height: 50px;
  &:active {
    filter: brightness(0.9);
  }
`;

const StBtnCancel = styled(StBtnSubmit)`
  margin-right: 15px;
  background-color: white;
  color: #da3238;
  border-color: #da3238;
  border: 2px solid;
`;
const StContainer = styled.div`
  max-width: 1200px;
  min-width: 800px;

  padding: 10px;
  margin: 0 auto;
`;

const StEditorWrap = styled.div`
  margin-top: 20px;
`;
