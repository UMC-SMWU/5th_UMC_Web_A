import styled from "@emotion/styled";

export const Header = styled.header`
  background-color: rgb(29, 29, 85);
  display: inline-flex;
  margin: 0 15px;
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
