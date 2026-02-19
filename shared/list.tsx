export const AIDoctorAgents = [
    {
        id: 1,
        specialist: "General Physician",
        description: "Helps with everyday health concerns and common symptoms.",
        image: "/doctor1.png",
        agentPrompt: "You are a friendly General Physician AI. Greet the user and quickly ask what symptoms they’re experiencing. Keep responses short and helpful.",
        voiceId: "4zVVKJJRwoOAAeUwtCQ1", // Ayden
        subscriptionRequired: false
    },
    {
        id: 2,
        specialist: "Pediatrician",
        description: "Expert in children's health, from babies to teens.",
        image: "/doctor2.png",
        agentPrompt: "You are a kind Pediatrician AI. Ask brief questions about the child’s health and share quick, safe suggestions.",
        voiceId: "iP95p4xoKVk53GoZ742B", // Chris
        subscriptionRequired: true
    },
    {
        id: 3,
        specialist: "Dermatologist",
        description: "Handles skin issues like rashes, acne, or infections.",
        image: "/doctor3.png",
        agentPrompt: "You are a knowledgeable Dermatologist AI. Ask short questions about the skin issue and give simple, clear advice.",
        voiceId: "iP95p4xoKVk53GoZ742B", // Chris (Fallback for Sarge)
        subscriptionRequired: true
    },
    {
        id: 4,
        specialist: "Psychologist",
        description: "Supports mental health and emotional well-being.",
        image: "/doctor4.png",
        agentPrompt: "You are a caring Psychologist AI. Ask how the user is feeling emotionally and give short, supportive tips.",
        voiceId: "XB0fDUnXU5powFXDhCwa", // Charlotte (Fallback for Susan)
        subscriptionRequired: true
    },
    {
        id: 5,
        specialist: "Nutritionist",
        description: "Provides advice on healthy eating and weight management.",
        image: "/doctor5.png",
        agentPrompt: "You are a motivating Nutritionist AI. Ask about current diet or goals and suggest quick, healthy tips.",
        voiceId: "XB0fDUnXU5powFXDhCwa", // Charlotte (Fallback for Eileen)
        subscriptionRequired: true
    },
    {
        id: 6,
        specialist: "Cardiologist",
        description: "Focuses on heart health and blood pressure issues.",
        image: "/doctor6.png",
        agentPrompt: "You are a calm Cardiologist AI. Ask about heart symptoms and offer brief, helpful advice.",
        voiceId: "XB0fDUnXU5powFXDhCwa", // Charlotte
        subscriptionRequired: true
    },
    {
        id: 7,
        specialist: "ENT Specialist",
        description: "Handles ear, nose, and throat-related problems.",
        image: "/doctor7.png",
        agentPrompt: "You are a friendly ENT AI. Ask quickly about ENT symptoms and give simple, clear suggestions.",
        voiceId: "T3b0vsQ5dQwMZ5ckOwBk", // Aaliyah (Fallback for Ayla)
        subscriptionRequired: true
    },
    {
        id: 8,
        specialist: "Orthopedic",
        description: "Helps with bone, joint, and muscle pain.",
        image: "/doctor8.png",
        agentPrompt: "You are an understanding Orthopedic AI. Ask where the pain is and give short, supportive advice.",
        voiceId: "T3b0vsQ5dQwMZ5ckOwBk", // Aaliyah
        subscriptionRequired: true
    },
    {
        id: 9,
        specialist: "Gynecologist",
        description: "Cares for women’s reproductive and hormonal health.",
        image: "/doctor9.png",
        agentPrompt: "You are a respectful Gynecologist AI. Ask brief, gentle questions and keep answers short and reassuring.",
        voiceId: "iP95p4xoKVk53GoZ742B", // Chris (Fallback for Hudson)
        subscriptionRequired: true
    },
    {
        id: 10,
        specialist: "Dentist",
        description: "Handles oral hygiene and dental problems.",
        image: "/doctor10.png",
        agentPrompt: "You are a cheerful Dentist AI. Ask about the dental issue and give quick, calming suggestions.",
        voiceId: "7NsHHn1WozBtRQHAEAjL", // Atlas
        subscriptionRequired: true
    },
    {
        id: 11,
        specialist: "Neurologist",
        description: "Expert in brain, spinal cord, and nerve-related disorders.",
        image: "/doctor11.png",
        agentPrompt: "You are a professional Neurologist AI. Ask about neurological symptoms like headaches, dizziness or numbness and provide clear guidance.",
        voiceId: "4zVVKJJRwoOAAeUwtCQ1",
        subscriptionRequired: true
    },
    {
        id: 12,
        specialist: "Ophthalmologist",
        description: "Specializes in eye care, vision, and eye-related conditions.",
        image: "/doctor12.png",
        agentPrompt: "You are an expert Ophthalmologist AI. Ask about vision issues or eye symptoms like redness or irritation and offer helpful advice.",
        voiceId: "7NsHHn1WozBtRQHAEAjL",
        subscriptionRequired: true
    }
];
