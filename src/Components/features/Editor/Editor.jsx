import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { AuthApi } from "../../../shared/Api";
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

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

const jobKeyWord = ["엔지니어링", "교육", "개발", "HR·경영지원"];

export default function ToastEditor() {
  const navigate = useNavigate();
  // 지역 정보 검색
  const [sidos, setSidos] = useState([]);
  const getFindSido = async () => {
    try {
      const res = await AuthApi.findsido();
      const sidoArray = res.data.data.map((item) => item.sido);
      setSidos(sidoArray);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getFindSido();
  }, []);

  const [title, setTitle] = useState("");
  const titleChangeHandler = (e) => {
    setTitle(e.target.value);
  };

  // 채용공고 마감일 지정
  const [endDate, setEndDate] = useState("");
  const dateChangeHandler = (e) => {
    setEndDate(e.target.value);
  };

  // 지역값 저장
  const [address, setAddress] = useState("");
  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  // 모집 기한 상시체용 어부
  const [isChecked, setIsChecked] = useState(false);
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    if (isChecked) {
      setEndDate(""); // 모집 기한이 null일 경우 상시체용으로 처리
    }
  };

  const [selectedJob, setSelectedJop] = useState("");
  const handleJobChange = (e) => {
    setSelectedJop(e.target.value);
  };

  // 본문을 저장
  const [content, setContent] = useState("");
  const editorRef = useRef();

  const onChange = () => {
    const data = editorRef.current.getInstance().getHTML();
    setContent(data);
    console.log(content);
  };

  // 파일 URL을 받아 글에 첨부하기
  const onUploadImage = async (blob, callback) => {
    const imageName = await uploadImage(blob);
    callback(
      process.env.REACT_APP_BACKEND_SERVER_URL + `/download/${imageName}`,
      "alt text"
    );
    return false;
  };

  // 서버에 데이터 보내고 URL 받기
  const uploadImage = async (blob) => {
    const formData = new FormData();
    formData.append("file", blob);
    try {
      const res = await AuthApi.imgUoload(formData);
      return res.data.imageName;
    } catch (err) {
      console.log(err);
    }
  };

  const newPost = {
    title: title,
    content: content,
    keywords: selectedJob,
    end_date: endDate,
    address: address,
  };

  const [cookies] = useCookies(["authorization"]);
  const config = {
    headers: {
      // 쿠키를 헤더에 추가
      authorization: cookies.authorization,
    },
  };

  const onSubmiltHandler = async () => {
    if (!title || !address || !selectedJob) {
      alert("필수 항목을 입력해 주세요.");
      return;
    }
    try {
      const res = await AuthApi.write(newPost, config);
      alert(res.data.massage);
      navigate("/");
    } catch (err) {
      alert(err.response.data.errorMessage);
    }
  };

  return (
    <StContainer>
      <StLayer>
        <StLabel>
          제목:
          <StTitleInput
            type="text"
            value={title}
            onChange={(e) => titleChangeHandler(e)}
          />
        </StLabel>

        <StLabel>
          지역:
          <StSelect value={address} onChange={handleAddressChange}>
            <option value="">선택해주세요</option>
            {sidos.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </StSelect>
        </StLabel>

        <StLabel>
          모집기한:
          <StDateInput
            type="date"
            value={endDate}
            onChange={(e) => dateChangeHandler(e)}
            disabled={isChecked}
          />
        </StLabel>

        <StCheckboxLabel>
          상시채용 여부:
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
        </StCheckboxLabel>
        <StLabel>
          직군:
          <StSelect value={selectedJob} onChange={handleJobChange}>
            <option value="">선택해주세요</option>
            {jobKeyWord.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </StSelect>
        </StLabel>
      </StLayer>
      <StEditorWrap>
        <Editor
          initialValue=" "
          placeholder="내용을 입력해주세요."
          previewStyle="vertical" // 미리보기 스타일 지정
          height="700px" // 에디터 창 높이
          initialEditType="WYSIWYG" // 초기 입력모드 설정(디폴트 markdown)
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
        <StBtnSubmit onClick={onSubmiltHandler}>저장</StBtnSubmit>
        <Link to="/">
          <StBtnCancel>취소</StBtnCancel>
        </Link>
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

const StLabel = styled.label`
  font-weight: bold;
  font-size: large;
  margin-bottom: 15px;
  margin-right: 10px;
`;
const StLayer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`;

const StTitleInput = styled.input`
  font-size: 24px;
  border: none;
  border-bottom: 2px solid #ccc;
  width: 80%;
`;

const StSelect = styled.select`
  font-size: 14px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #f5f5f5;
  color: #333;
`;

const StDateInput = styled.input`
  font-size: 14px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const StCheckboxLabel = styled.label`
  font-weight: bold;
  font-size: large;
  margin-bottom: 15px;
  margin-right: 10px;
  display: flex;
  align-items: center;
  cursor: pointer;
`;