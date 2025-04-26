import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: '3-Layered-Security-Authentication-PoC',
        description: "This project hosts a Proof of Concept (PoC) for a 3-layer security architecture implemented in Python. It demonstrates a robust security model with authentication, authorization, and data encryption to ensure maximum protection.",
        tools: ['OpenCV', 'Python', 'Streamlit', 'MediaPipe', "Numpy",],
        code: '',
        demo: '',
        image: ayla,
        role: 'ML Developer',
    },
    {
        id: 2,
        name: 'Jalavishudhakara - Water Hayacinth Remover',
        description: 'I have designed and developed a robot capable of detecting water hyacinth in ponds. The robot utilizes SLAM (Simultaneous Localization and Mapping) for navigation and employs a machine learning model trained with OpenCV for plant identification',
        tools: ['ROS2 Humble', 'URDF', "SLAM", "Esp32", "microROS", "OpenCV", "Linux", 'Git', 'Github', 'Jenkins', 'CI/CD', "Rviz", "Gazebo"],
        role: 'ROS Developer',
        code: 'C++, Python',
        demo: '',
        image: travel,
    },
    {
        id: 3,
        name: 'CleanEatz - Ecommerce Webisite',
        description: 'I have designed and developed an e-commerce platform specializing in selling millet-based food products. The platform incorporates robust features for product management, secure payment integration, and an optimized user experience to support seamless transactions.',
        tools: ['Html','CSS', 'Javascript', 'PHP', 'SQL', 'JSON', 'Woocommerce', ],
        code: '',
        role: 'Full Stack Developer',
        demo: 'https://cleaneatz.in/',
        image: realEstate,
    },
    {
        id: 4,
        name: 'AI-powered Chatbot for KITS College Website',
        description: "Me and my team built an AI-powered Chatbot for KITS College Website. I have developed using the Dialogflow, TensorFlow with Python. Built AI assistants using OpenAI's latest model and trained using our dataset. The Chatbot fetches data from User Input and generates the college related information. ",
        tools: ['TensorFlow', 'DialogFlow', 'Python', 'HTML', 'CSS', 'JS', 'NodeJS', 'Git', 'Github',],
        role: 'Backend Developer',
        code: '',
        demo: '',
        image: crefin,
    },
   
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },