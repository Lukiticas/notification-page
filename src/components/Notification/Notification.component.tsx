import { useState } from "react";
import notification, { notifications } from "../../notification";
import getDate from "../../utils/getDate";
import {
  NoteContentBody,
  NoteContentIcon,
  TextContentDescription,
  NoteProfileIcon,
  NoteName,
  NoteBodySection,
  NoteTargetName,
  TextDescription,
  TextDescriptionP,
  TextDescriptionSmall,
  NotePreviewText,
} from "./Notification.styles";

interface NotificationElementProps {
  data: notifications;
  handleReadNotification: (id: number) => void;
}

const NotificationElement = ({
  data,
  handleReadNotification,
}: NotificationElementProps) => {
  const [hasUserClicked, sethasUserClicked] = useState(false);
  const [dateNumber, dateSuffix] = getDate(data.createdAt);

  const type = notification.types[data.type];
  const date = `${dateNumber} ${dateSuffix}${
    dateNumber > 1 && dateSuffix !== "m" ? "s" : ""
  }`;

  const handleClick = () => {
    handleReadNotification(data.id);
    sethasUserClicked((old) => !old);
  };

  return (
    <NoteBodySection onClick={handleClick} read={data.read} tabIndex={0}>
      <NoteProfileIcon
        src={data.userIcon as string}
        alt={`${data.user} icon`}
      />
      <NoteContentBody>
        <TextContentDescription>
          <TextDescription>
            <TextDescriptionP>
              <NoteName>{data.user}</NoteName> {type}
              {data.target && (
                <NoteTargetName className={data.type}>
                  {data.target}
                </NoteTargetName>
              )}
            </TextDescriptionP>
            <TextDescriptionSmall>{date}</TextDescriptionSmall>
          </TextDescription>
          {data.PreviewImg && (
            <NoteContentIcon
              src={data.PreviewImg}
              alt={data.user + "preview"}
            />
          )}
        </TextContentDescription>

        {data.PreviewText && hasUserClicked && (
          <NotePreviewText>
            <p>{data.PreviewText}</p>
          </NotePreviewText>
        )}
      </NoteContentBody>
    </NoteBodySection>
  );
};

export default NotificationElement;
