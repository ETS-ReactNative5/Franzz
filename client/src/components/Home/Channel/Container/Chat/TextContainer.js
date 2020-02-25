/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';
import { LinearProgress } from '@material-ui/core';
import Message from './Message';


import './TextContainer.css';

// Scripting work for adding photos to the cloud through the text container
import useChangeHighlightClass from '../../../../../hooks/useHighlightClass';
import { preventDefaults, handleDrop } from '../../Modules/Photos/Scripts/DragAndDropPhotos';

const TextContainer = ({
  messages, deleteMessage, channelId, emitSendMessage, currentUser,
}) => {
  // Used to highlight the box when dragging photos in
  const { highlightClass, changeHighlightClass } = useChangeHighlightClass('');
  const [showProgress, toggleProgress] = useState(false);


  const formattedMessages = messages.map((msg) => (
    <Message
      key={msg.id}
      id={msg.id}
      message={msg.message}
      created={msg.created}
      username={msg.user.username}
      currentUser={currentUser}
      isCurrent={msg.user.id === currentUser}
      userId={msg.user.id}
      deleteMessage={deleteMessage}
      video={msg.video}
      image={msg.image}
    />
  ));

  // Changes the class depending on the event
  // and tracks event
  function boxEvent(e) {
    changeHighlightClass(e.type);
    preventDefaults(e);
  }

  function dropFile(e) {
    preventDefaults(e);
    toggleProgress(true);
    changeHighlightClass(e.type);
    handleDrop(e, channelId, 'chat', emitSendMessage);
    setTimeout(() => {
      toggleProgress(false);
    }, 2000);
  }


  return (
    <div
      onDragEnter={boxEvent}
      onDragLeave={boxEvent}
      onDragOver={boxEvent}
      onDrop={dropFile}
    >
      <ScrollToBottom
        id="drop-area"
        className={`textContainer ${highlightClass}`}
      >
        {formattedMessages}
      </ScrollToBottom>
      {showProgress && <LinearProgress />}
    </div>
  );
};

export default TextContainer;
