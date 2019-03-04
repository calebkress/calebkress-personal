import { injectGlobal } from 'styled-components';
import { ColorScheme } from './styleConstants';

injectGlobal`
  @import url("https://fonts.googleapis.com/css?family=Catamaran");
  @import url("https://fonts.googleapis.com/css?family=Roboto");
  @import url("https://fonts.googleapis.com/css?family=Open+Sans");
  body {
    height: 100%;
    margin: 0;
    padding: 0;
  }
  h4, p {
    font-family: 'Open Sans', sans-serif;
  }
  hr {
    width: 50%;
  }
  a {
    text-decoration: none;
    font-weight: bold;
    transition: all .3s ease;
    &:hover {
      text-decoration: none;
      color: ${ColorScheme.primary};
    }
    &:focus {
      text-decoration: none;
      color: ${ColorScheme.primary};
    }
  }
  .phone a,
  .email a,
  .location a {
    color: #fd4f00;
    font-size:18px;
  }
  .contact-h2 {
    color: #fd4f00;
    padding-top:20px;
  }
  .contact-fields .form-group input,
  .contact-fields .form-group textarea {
    font-size: 16px;
  }
  h2 {
      font-family: 'Raleway', sans-serif;
      font-weight: 900;
      color: #101f1d;
      font-size: 35px;
      letter-spacing: 1.25px;
  }
  .about {
    width: 60%;
    text-align: center;
    margin: 0 auto;
  }
`;
