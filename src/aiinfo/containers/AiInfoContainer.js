import React from 'react';
import styled from 'styled-components';


const AiInfoContainer = () => {
  return (
    <TableContainer>
      <table>
        <thead>
          <tr>
            <th>분야</th>
            <th>서비스명</th>
            <th>요약</th>
            <th>링크</th>
            <th>비용</th>
            <th>저작권에 관하여</th>
            <th>최종업데이트일</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>AI Art</td>
            <td>Leonardo AI</td>
            <td>AI 기반 아트 생성기로 다양한 스타일의 이미지를 신속히 제작 가능</td>
            <td><a href="https://leonardo.ai">Leonardo AI</a></td>
            <td>프리미엄: 150 무료 크레딧, 유료 플랜도 존재</td>
            <td>무료 사용자는 생성물이 공개되며 재사용 가능, 유료 사용자는 완전한 저작권과 소유권 보유</td>
            <td>2024</td>
          </tr>
          <tr>
            <td>AI Models</td>
            <td>Hugging Face</td>
            <td>AI 모델 공유 플랫폼으로 다양한 모델을 다운로드 및 활용 가능</td>
            <td><a href="https://huggingface.co">Hugging Face</a></td>
            <td>무료 및 유료 모델 제공</td>
            <td>모델의 라이센스와 조건은 각 모델의 제작자가 설정</td>
            <td>2024</td>
          </tr>
          <tr>
            <td>3D Model</td>
            <td>Vroid</td>
            <td>3D 캐릭터 모델링 소프트웨어로 VR 및 애니메이션용 캐릭터를 쉽게 제작 가능</td>
            <td><a href="https://vroid.com">Vroid</a></td>
            <td>무료 사용 가능</td>
            <td>제작된 모델은 개인 및 상업적 용도로 자유롭게 사용 가능</td>
            <td>2024</td>
          </tr>
          <tr>
            <td>AI Art</td>
            <td>Stability AI</td>
            <td>오픈 소스 AI 모델을 활용하여 다양한 이미지 생성 가능</td>
            <td><a href="https://stability.ai">Stability AI</a></td>
            <td>무료 및 유료 사용 가능</td>
            <td>생성된 이미지는 상업적 용도로도 사용 가능</td>
            <td>2024</td>
          </tr>
          <tr>
            <td>AI Text</td>
            <td>Isla Critic</td>
            <td>AI 기반 텍스트 비평 분석 도구로 자연어 처리 기능을 제공</td>
            <td><a href="https://isla-critic.m47rix.com">Isla Critic</a></td>
            <td>무료</td>
            <td>사용자가 생성한 텍스트 데이터는 사용자에게 저작권이 있음</td>
            <td>2024</td>
          </tr>
        </tbody>
      </table>
    </TableContainer>
  );
};

const TableContainer = styled.div`
  table {
    width: 100%;
    border-collapse: collapse;
  }

  th, td {
    padding: 10px;
    border: 1px solid #ddd;
    text-align: left;
  }

  th {
    background-color: #f4f4f4;
    font-weight: bold;
  }

  a {
    color: #007bff;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
`;

export default React.memo(AiInfoContainer);
