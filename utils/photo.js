function geturl(name) {
    var baseurl = "https://lg-2vubfcyy-1257155910.cos.ap-shanghai.myqcloud.com/";
    var address = {
        alarm: baseurl + "alarm.png",
        finish: baseurl + "finish.png",
        help: baseurl + "help.png",
        mail: baseurl + "mail.png",
        note: baseurl + "note.png",
        paper: baseurl + "paper.png",
        server: baseurl + "server.png",
        setting: baseurl + "setting.png",
        todolist: baseurl + "todolist.png",
        video: baseurl + "video.png",
        add: baseurl + "add.png",
        red: baseurl + "red.png",
        black: baseurl + "black.png",
        blue: baseurl + "blue.png",
        brown: baseurl + "brown.png",
        green: baseurl + "green.png",
        olive: baseurl + "olive.png", 
        orange: baseurl + "orange.png",
        purple: baseurl + "purple.png",
        yellow: baseurl + "yellow.png",
        date: baseurl + "date.png",
        get_content: "",
        post_content_item: ""
    };
    return address[name];
};

export default geturl;