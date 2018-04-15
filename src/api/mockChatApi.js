import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const chats = [
  {
    id: "1",
    message: "Hi, How are you today?",
    buttons: [{id:1, msg:"I'm Good", key: "buttons11", answer:"Good!"}, {id:2, msg:"I'm not so well", key: "buttons12", answer: "Sorry to hear that"}]
  },
  {
    id: "2",
    message: "What course do you want to see?",
    buttons: [
      {id:1, msg: "munich the city", key: "buttons21", answer: "Redirecting to munich the city course", page:"/course/munich-the-city"}, 
      {id:2, msg:"Munich Architecture", key: "buttons22", answer: "Redirecting to Munich Architecture course", page:"/course/munich"},
      {id:3, msg:"clean munich", key: "buttons32", answer: "Redirecting to clean munich course", page:"/course/clean-munich"}]
  }
];

const chatHistory = [];

function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, 'g'), replace);
}

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (chat) => {
  return ++chat.length;
};

class ChatApi {
  static getAllChat() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], [chats[0]]));
      }, delay);
    });
  }

  static getChatHistory() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], [chatHistory]));
      }, delay);
    });
  }

  // static getInitialButton(){
  //   return new Promise((resolve, reject) =>{
  //     setTimeout(() =>{
  //         resolve(Object,assign([], chats));
  //     }, delay);
  //   }); 
  // }

  static getNextButton(BtnId){
    return new Promise((resolve, reject) =>{
      setTimeout(() =>{
          resolve(Object.assign([], chats[BtnId]));
      }, delay);
    }); 
  }

  static saveChat(chat) {
    chat = Object.assign({}, chat); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (chat.id) {
          const existingchatIndex = chat.findIndex(a => a.id == chat.id);
          chatHistory.splice(existingchatIndex, 1, chat);
        } else {
          //Just simulating creation here.
          //The server would generate ids and watchHref's for new chats in a real app.
          //Cloning so copy returned is passed by value rather than by reference.
          chat.id = generateId(chats);
          chatHistory.push(chat);
        }

        resolve(chatHistory);
      }, delay);
    });
  }

  static deletechat(chatId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfchatToDelete = chats.findIndex(chat => {
          chat.id == chatId;
        });
        chats.splice(indexOfchatToDelete, 1);
        resolve();
      }, delay);
    });
  }
}

export default ChatApi;