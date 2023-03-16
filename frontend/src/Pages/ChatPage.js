import { Box } from "@chakra-ui/layout";
import { useState } from "react";
import MyChats from "../components/MyChats";
import { ChatState } from "../Context/ChatProvider";
import Chatbox from "../components/ChatBox";
import SideDrawer from "../components/miscelleneous/SideDrawer";

const Chatpage = () => {
  const [fetchAgain, setFetchAgain] = useState(false);
  const { user } = ChatState();

  console.log(user, "user chat page");
  // const loggedUserHere = JSON.parse(localStorage.getItem("userInfo"));
  // if (!loggedUserHere) {
  //   console.log(loggedUserHere, "loggedUserHere inner");
  //   window.location.reload();
  // }
  // console.log(loggedUserHere, "loggedUserHere outer");

  return (
    <div style={{ width: "100%" }}>
      {user && <SideDrawer />}
      <Box d="flex" justifyContent="space-between" w="100%" h="91.5vh" p="10px">
        {user && <MyChats fetchAgain={fetchAgain} />}
        {user && (
          <Chatbox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
        )}
      </Box>
    </div>
  );
};

export default Chatpage;
