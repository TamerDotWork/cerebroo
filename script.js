				import { createChat } from "https://cdn.jsdelivr.net/npm/@n8n/chat/dist/chat.bundle.es.js";
			
				createChat({
				  webhookUrl:
					"https://sterling-sensible-pigeon.ngrok-free.app/webhook/825bb4ff-a8b7-4bcb-98c1-ccf5a6327b0b/chat",
				  initialMessages: [
					"Hi there! 👋 ",
					"I'M Omar's AI Assistant . How can I assist you today?",
					"you can ask me about, our services, work history and if you need to schedule a consultation session "
				   ],
				  i18n: {
					en: {
					  title: "Hi there!🤖",
					  subtitle: "Start a chat. We're here to help you 24/7.",
					  inputPlaceholder: "Type your question.",
					},
				  },
				});
				