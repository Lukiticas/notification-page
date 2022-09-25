import { useState } from "react";
import { ThemeProvider } from "styled-components";

import notification, { notifications } from "./notification";
import usePersistedState from "./utils/UsePersistedState";

import dark from "./styles/themes/dark";
import light from "./styles/themes/light";
import GlobalStyle, {
  AppFooter,
  AppHeader,
  AppMain,
  AppWrapper,
  HeaderButton,
  HeaderCount,
  HeaderTitle,
  ThemeButton,
} from "./styles/index.styles";

import NotificationElement from "./components/Notification/Notification.component";

function App() {
  const [theme, setTheme] = usePersistedState("theme", light);
  const [notes, setNotes] = useState<notifications[]>(
    notification.notifications
  );

  const toggleTheme = () => {
    setTheme(theme.title === "light" ? dark : light);
  };

  const handleReadNotification = (id: number) => {
    setNotes((old) => {
      const newList = [...old];
      const index = old.findIndex((item) => item.id === id);
      newList[index].read = true;
      return newList;
    });
  };

  const markAsRead = (note: notifications) => {
    return { ...note, read: true };
  };

  const handleMakeAllRead = () => {
    setNotes((oldNotes) => [...oldNotes.map(markAsRead)]);
  };

  const unreadNots = notes.filter((el) => !el.read);

  const notesElements = notes.map((el, idx) => {
    return (
      <NotificationElement
        key={idx}
        handleReadNotification={handleReadNotification}
        data={el}
      />
    );
  });

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      <AppWrapper>
        <AppHeader>
          <HeaderTitle>Notifications</HeaderTitle>
          <HeaderCount>{unreadNots.length}</HeaderCount>
          <HeaderButton onClick={handleMakeAllRead}>
            Mark all as read
          </HeaderButton>
        </AppHeader>

        <AppMain>{notesElements}</AppMain>
        <AppFooter>
          <ThemeButton type="button" onClick={toggleTheme}>
            Toggle theme!
          </ThemeButton>
        </AppFooter>
      </AppWrapper>
    </ThemeProvider>
  );
}

export default App;
