import React from "react";
import styled, { css } from "styled-components";
import palette from "../../styles/palette";
import { useSelector } from "../../store";
import WarningIcon from "../../public/static/svg/common/warning.svg";

const Container = styled.div<{ isValid: boolean; validateMode: boolean }>`
  .radio-label {
    font-size: 16px;
    font-weight: 600;
    color: ${palette.gray_76};
    margin-bottom: 32px;
  }

  .radio-list-wrapper {
    &:after {
      display: block;
      content: "";
      clear: both;
    }
  }
  label {
    float: left;
    margin-bottom: 24px;
    font-size: 16px;
    line-height: 1.2;
    cursor: pointer;
    clear: both;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const RadioGroup = () => {
  return <div />;
};

export default RadioGroup;
