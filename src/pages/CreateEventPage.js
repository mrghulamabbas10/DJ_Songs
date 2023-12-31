import React, { useState } from "react";
// useNavigate
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Stack,
  TextField,
  Typography,
  InputAdornment,
  Divider,
} from "@mui/material";

import DriveFileRenameOutlineOutlinedIcon from "@mui/icons-material/DriveFileRenameOutlineOutlined";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import IconButton from "@mui/material/IconButton";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

const CreateEventPage = () => {
  const navigate = useNavigate();
  const [eventName, setEventName] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedDate, setSelectedDate] = useState("");
  const [error, setError] = useState("");



  // Initialize the useNavigate hook

  const handleFileInputChange = (e) => {
    // Define the logic for handling file input change
  };

  const handleClearClick = () => {
    // Handle clearing the selected file
    setSelectedFile("");
  };

  const clearInput = (inputField) => {
    setEventName("");
  };

  return (
    <Box className="max_container bg-black z-0 text-gray-500 px-1">
      <Box className="mt-10">
        <TextField
          id="input-with-icon-textfield"
          label="Username"
          placeholder="input"
          fullWidth
          value={eventName}
          onChange={(e) => setEventName(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <DriveFileRenameOutlineOutlinedIcon />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                <HighlightOffIcon
                  onClick={() => clearInput("eventName")}
                  style={{ cursor: "pointer" }}
                />
              </InputAdornment>
            ),
          }}
          variant="outlined"
        />
      </Box>
      {/* ... (rest of your component code) */}
      <Stack className="bg-gray-500 px-6 mt-8 py-8 rounded-[40px] mx-3">
        <p className="text-[#CAC4D0]">Select Date</p>

        <Box className="mt-5">
          <TextField
            id="input-with-icon-textfield"
            label="Date"
            type="date"
            fullWidth
            variant="outlined"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Box>
      </Stack>
      <Box className="mt-10">
        <TextField
          id="input-file-textfield"
          label="Insert Picture for QR code (optional)"
          type="file"
          accept=".png, .jpg"
          fullWidth
          variant="outlined"
          value={selectedFile}
          onChange={(e) => setSelectedFile(e.target.value)}
          InputLabelProps={{
            shrink: true,
          }}
          InputProps={{
            inputProps: {
              accept: ".pdf,.doc,.docx,.png,.jpg",
            },
            startAdornment: (
              <IconButton component="label">
                <AttachFileIcon style={{ color: "white" }} />
                <input
                  type="file"
                  accept=".png, .jpg"
                  style={{ display: "none" }}
                  onChange={handleFileInputChange}
                />
              </IconButton>
            ),
            endAdornment: (
              <InputAdornment position="end">
                {selectedFile && (
                  <IconButton onClick={handleClearClick}>
                    <HighlightOffIcon
                      style={{ color: "white" }}
                      className="text-white"
                    />
                  </IconButton>
                )}
              </InputAdornment>
            ),
          }}
        />
      </Box>
      <Box className="mt-10 px-12">
        <Button
          variant="contained"
          color="primary"
          size="large"
          fullWidth
          onClick={()=> {navigate("/Events/:asd")}}
          className="flex items-center"
          startIcon={<ArrowRightIcon />}
          sx={{ padding: 1.3, borderRadius: "40px" }}>
          Create Event
        </Button>
      </Box>
    </Box>
  );
};

export default CreateEventPage;
