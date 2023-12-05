import React from "react";
import { Stack, Box } from "@mui/material";
import { Videocard, Channelcard } from "./";
const Videos = ({ videos, direction }) => {
  return (
    <Stack
      direction={direction || "row"}
      flexWrap="wrap"
      justifycontent="start"
      gap={2}
    >
      {videos.map((item, idx) => (
        <Box key={idx}>
          {item.id.videoId && <Videocard video={item} />}
          {item.id.channelId && <Channelcard channelDetail={item} />}
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;
