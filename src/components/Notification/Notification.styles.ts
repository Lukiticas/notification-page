import styled from "styled-components";

interface sectionProps {
  read: boolean;
}

const NoteBodySection = styled.section<sectionProps>`
  display: flex;
  position: relative;

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

  &::after {
    display: ${(props) => (props.read ? "none" : "block")};
    content: "";
    background-color: ${(props) => props.theme.colors.acc800};

    width: 0.6rem;
    height: 0.6rem;

    position: absolute;
    top: -0.2rem;
    right: -0.2rem;

    border-radius: 100vw;
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

const NoteName = styled.h2`
  margin-right: 0.5ch;
  display: inline;
  text-decoration: none;
  font-weight: 800;
  color: ${(props) => props.theme.colors.wrd800};
  font-size: 1rem;

  &:hover {
    color: ${(props) => props.theme.colors.acc900};
  }
`;

const NoteTargetName = styled.span`
  margin-inline: 0.5ch;
  font-weight: 800;
  font-size: 1rem;
  text-decoration: none;
  text &:hover {
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

const TextDescriptionP = styled.div``;

const TextDescriptionSmall = styled.small`
  color: ${(props) => props.theme.colors.wrd400};
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
