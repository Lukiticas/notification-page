import styled from "styled-components";

interface sectionProps {
  read: boolean;
}

const NoteBodySection = styled.section<sectionProps>`
  display: flex;

  width: 100%;
  padding: 1rem;

  gap: 1rem;

  background-color: ${(props) =>
    props.read ? props.theme.colors.bg400 : props.theme.colors.bg600};

  border-radius: 0.5rem;

  .lg,
  .jg {
    color: ${(props) => props.theme.colors.acc900};
    &:hover {
      color: ${(props) => props.theme.colors.wrd600};
    }
  }
  .rp {
    color: ${(props) => props.theme.colors.wrd600};
  }

  &:hover {
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
      rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  }
`;

const NoteProfileIcon = styled.img`
  width: 3rem;
  height: 3rem;
`;

const NoteContentBody = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const TextContentDescription = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  flex-flow: nowrap;

  a {
    &:first-of-type {
      margin-right: 0.5ch;
    }
    &:last-of-type {
      margin-left: 0.5ch;
    }
  }
`;

const NoteName = styled.a`
  text-decoration: none;
  font-weight: 800;
  color: ${(props) => props.theme.colors.wrd800};
  font-size: 1rem;

  &:hover {
    color: ${(props) => props.theme.colors.acc900};
  }
`;

const NoteTargetName = styled.a`
  font-weight: 800;
  font-size: 1rem;
  text-decoration: none;

  &:hover {
    color: ${(props) => props.theme.colors.acc900};
  }
`;

const TextDescription = styled.div`
  font-size: 1rem;
  color: ${(props) => props.theme.colors.wrd600};
`;

const NoteContentIcon = styled.img`
  max-width: 3rem;
  margin-left: auto;
  cursor: pointer;
  border: 0.2rem solid ${(props) => props.theme.colors.bg800};
  border-radius: 0.5rem;
`;

const TextDescriptionP = styled.p``;

const TextDescriptionSmall = styled.small`
  color: ${(props) => props.theme.colors.wrd400};
`;

const ReadBullet = styled.span`
  position: absolute;
  top: -23px;
  right: -20px;
`;

const NotePreviewText = styled.div`
  cursor: pointer;
  color: ${(props) => props.theme.colors.wrd600};
  font-weight: 500;
  padding: 1rem;
  margin-top: 1rem;
  border-radius: 0.5rem;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;

  &:hover {
    background-color: ${(props) => props.theme.colors.bg800};
  }
`;
export {
  ReadBullet,
  TextDescriptionSmall,
  TextDescriptionP,
  TextDescription,
  NoteContentIcon,
  TextContentDescription,
  NoteBodySection,
  NoteProfileIcon,
  NoteContentBody,
  NoteName,
  NoteTargetName,
  NotePreviewText,
};
