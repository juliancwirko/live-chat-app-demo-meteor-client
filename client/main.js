import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { liveChat } from 'meteor/live-chat-meteor-client';

import './main.html';

Meteor.startup(function () {
    // you need to initialize your chatBox here
    // you need to provide your client app id here
    // you need to create a client app in the host app
    liveChat.init('AQne8yYkemE923dqE');
});
