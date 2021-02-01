import styled, { keyframes, css } from 'styled-components';
import { Briefcase, Award, User, LogOut } from '../../styles/Icons';

export const Container = styled.nav`
  height: 100vh;
  width: 70px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  background: var(--dark-gray);
`;

const neon = keyframes`
 from {
    filter: drop-shadow(0 0 0 var(--neon));
  }
  to {
    filter: drop-shadow(0 0 15px var(--neon));
  }
`;

export const Header = styled.header`
  height: 84px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  > img {
    width: 4rem;
    animation: ${neon} 2.5s alternate infinite ease-in-out;
  }
`;

export const Options = styled.div`
  height: 230px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const Footer = styled.div`
  height: 84px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const iconStyle = css`
  width: 30px;
  height: 30px;
  flex-shrink: 0;
  stroke: var(--light-green);
  stroke-width: 1px;

  cursor: pointer;
  transition: .2s;

  &:hover {
    stroke-width: 2px;
    stroke: var(--neon);
  }
`;

export const OpportunitiesIcon = styled(Briefcase)`
  ${iconStyle}
`;
export const MyOpportunitiesIcon = styled(Award)`
  ${iconStyle}
`;
export const ProfileIcon = styled(User)`
  ${iconStyle}
`;
export const SignOutIcon = styled(LogOut)`
  ${iconStyle}
`;
