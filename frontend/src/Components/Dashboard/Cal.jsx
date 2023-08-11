import React, { useState,useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import { formatDate } from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
  CssBaseline,Grid,Container
} from "@mui/material";
import { http } from "../../Config/axiosConfig.js";
import SideandNavbar from "./SideandNavbar";

function Cal() {
    const [currentEvents, setCurrentEvents] = useState([]);
    const [data, setData] = useState([]);
    console.log(data);
    const handleDateClick = (selected) => {
      const title = prompt("Please enter a new title for your event");
      const calendarApi = selected.view.calendar;
      calendarApi.unselect();
  
      if (title) {
        calendarApi.addEvent({
          id: `${selected.dateStr}-${title}`,
          title,
          start: selected.startStr,
          end: selected.endStr,
          allDay: selected.allDay,
        });
      }
    };
  
    const handleEventClick = (selected) => {
      if (
        window.confirm(
          `Are you sure you want to delete the event '${selected.event.title}'`
        )
      ) {
        selected.event.remove();
      }
    };

    useEffect(() => {
      http.get(`/issue`)
        .then((res) => {
          setData(res.data.result);
          // setRefresh(!refresh);
        })
        .catch((err) => {
          console.log(err.messsage);
        });
    }, []);
  return (
    <Box sx={{ display: "flex" }}>
    <CssBaseline />
  <SideandNavbar/>
    <Box
        component="main"
        sx={{
          
          flexGrow: 1,
          height: "100vh",
          overflow: "auto",
        }}
      >
        <Container maxWidth="lg" sx={{ mt: 10, mb: 4 }}>
          <Grid container spacing={3}>
          <Grid item xs={12} md={8} lg={12}>
          <Box display="flex" justifyContent="space-between">
          <Box
          sx={{ backgroundColor: 'orange' }}
          flex="1 1 50%"
          p="15px"
          borderRadius="4px"
        >
          <Typography variant="h5">Events</Typography>
          <List>
            {currentEvents.map((event) => (
              <ListItem
                key={event.id}
                sx={{
                  backgroundColor: 'grey',
                  margin: "10px 0",
                  borderRadius: "2px",
                }}
              >
                <ListItemText
                  primary={event.title}
                  secondary={
                    <Typography>
                      {formatDate(event.start, {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </Typography>
                  }
                />
              </ListItem>
            ))}
          </List>
          </Box>

        {/* CALENDAR */}
        <Box flex="1 1 100%" ml="15px">
          <FullCalendar
            height="75vh"
            plugins={[
              dayGridPlugin,
              timeGridPlugin,
              interactionPlugin,
              listPlugin,
            ]}
            headerToolbar={{
              left: "prev,next today",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
            }}
            initialView="dayGridMonth"
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            select={handleDateClick}
            eventClick={handleEventClick}
            // eventsSet={(events) => setCurrentEvents(events)}
            events={
           

              [
              { title: 'event 1', start: '2023-08-13',end:'2023-08-26'},
              { title: 'event 2', date: '2023-08-15' }
            ]
            }
          
            // initialEvents={[
            //   {
            //     id: "12315",
            //     title: "All-day event",
            //     date: "2022-09-14",
            //   },
            //   {
            //     id: "5123",
            //     title: "Timed event",
            //     date: "2022-09-28",
            //   },
            // ]}
          />
      </Box>
      </Box>
            </Grid>
            </Grid>
            </Container>
            </Box>
            </Box>
  )
}

export default Cal