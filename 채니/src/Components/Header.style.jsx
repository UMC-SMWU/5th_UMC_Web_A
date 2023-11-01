import styled from "@emotion/styled";

export const Header = styled.header`
  background-color: rgb(29, 29, 85);
  display: inline-flex;
  flex-wrap: wrap;
  width: 100%;
`;

export const Navi = styled.nav``;

export const Content = styled.ul`
  background-color: rgb(29, 29, 85);
  display: inline-flex;
  margin: 15px 15px;
  flex-wrap: wrap;
  list-style: none; /* Remove bullet points */
  padding: 0; /* Remove default padding */
`;

export const Options = styled.li`
  margin-left: 10px;
  text-align: center; /* 가운데 정렬 */
  display: flex; /* 사용자 내용을 수직 중앙 정렬하기 위해 flex 컨테이너로 설정 */
  align-items: center; /* 수직 정렬 설정 */

  a {
    text-decoration: none; /* Remove underline */
    color: white; /* Set text color to white */
    padding: 5px 10px; /* Add spacing around links */
  }

  a:hover {
    /* Optional: Add hover effect for links */
    background-color: #333; /* Darker background color on hover */
  }
`;
