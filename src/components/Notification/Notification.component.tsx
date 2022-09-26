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
  const type = notification.types[data.type];
  const [dateNumber, dateSuffix] = getDate(data.createdAt);

  const date = `${dateNumber} ${dateSuffix}${
    dateNumber > 1 && dateSuffix !== "m" ? "s" : ""
  }`;

  return (
    <NoteBodySection
      onClick={() => handleReadNotification(data.id)}
      read={data.read}
    >
      <NoteProfileIcon
        src={data.userIcon as string}
        alt={`${data.user} icon`}
      />
      <NoteContentBody>
        <TextContentDescription>
          <TextDescription>
            <TextDescriptionP>
              <NoteName href="#">{data.user}</NoteName> {type}
              <NoteTargetName href="#" className={data.type}>
                {data.target ? data.target : null}
              </NoteTargetName>
            </TextDescriptionP>
            <TextDescriptionSmall>{date}</TextDescriptionSmall>
          </TextDescription>

          {data.PreviewImg && (
            <NoteContentIcon
              src={data.PreviewImg}
              alt={data.target as string}
            />
          )}
        </TextContentDescription>

        {data.PreviewText && (
          <NotePreviewText>
            <p>{data.PreviewText}</p>
          </NotePreviewText>
        )}
      </NoteContentBody>
    </NoteBodySection>
  );
};

export default NotificationElement;
