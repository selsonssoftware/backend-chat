import express from "express";
import { openChat,getMessages,sidebarChatList,createGroupChat,getGroupMessages,sendGroupMessage,groupInfo } from "../controllers/openChat.js";
import { protectRoute } from "../middleware/auth.middleware.js";

const router = express.Router();

// GET /chat/:user_id → open chat with this user
// router.get("/:user_id", protectRoute, openChat);
router.post("/send", openChat);
router.get("/getMessages", protectRoute, getMessages);
router.get("/sidebarChats", protectRoute, sidebarChatList);
router.post("/createGroup", protectRoute, createGroupChat);
router.get("/getGroupMessages", protectRoute, getGroupMessages);
router.post("/sendGroupMessage", protectRoute, sendGroupMessage);
router.get("/groupInfo", groupInfo);


export default router;
