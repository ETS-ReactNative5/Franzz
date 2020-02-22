import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import channelService from '../../../service/channelService';
import Chat from './Container/Chat/Chat';
import YoutubeSync from './Modules/VideoSync/YoutubeSync';
// modules
import StalkerMap from './Modules/StalkerMap/StalkerMap';
import './channelStyling.css';

const Channel = ({
  channel, users, name, messages, emitSendMessage, emitDeleteMessage, locations, center, currentUser,
}) => {

  const [invite, setInvite] = useState({
    ready: false,
    link: '',
  });
  const createInvite = () => {
    channelService
      .getInvite(channel)
      .then(({ channelID }) => setInvite({
        ready: true,
        link: channelID,
      }));
  };

  return (
    <div id="channel">
      {name}
      { invite.ready ? (
        <div>
          <textarea defaultValue={invite.link} />
          <CopyToClipboard
            text={invite.link}
          >
            <button type="button">
              Copy to clipboard!
            </button>
          </CopyToClipboard>
        </div>
      ) : <button type="button" onClick={createInvite}>Create Invite Link</button>}
      <Chat
        messages={messages}
        emitSendMessage={emitSendMessage}
        emitDeleteMessage={emitDeleteMessage}
        channel={channel}
        currentUser={currentUser}
      />
      <StalkerMap
        locations={locations}
        channel={channel}
        center={center}
      />
    </div>
  );
};

export default Channel;
