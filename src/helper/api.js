const FIRST_NAMES = ['Alice', 'Bob', 'Charlie', 'David', 'Eva'];
const LAST_NAMES = ['Smith', 'Johnson', 'Williams', 'Brown', 'Jones'];
const USER_IMAGES = [
    'https://randomuser.me/api/portraits/women/1.jpg',
    'https://randomuser.me/api/portraits/men/1.jpg',
    'https://randomuser.me/api/portraits/women/2.jpg',
    'https://randomuser.me/api/portraits/men/2.jpg',
    'https://randomuser.me/api/portraits/women/3.jpg',
];
const TITLES = ['Amazing Sunset', 'Tech Trends', 'Healthy Living', 'Travel Guide', 'Cooking Tips'];
const SUBTITLES = [
    'Explore the beauty of nature and witness the breathtaking colors of the sunset that will leave you in awe. The stunning hues of orange, pink, and purple that paint the sky create a mesmerizing panorama that captivates the heart and soul. As the sun dips below the horizon, it casts a golden glow on everything it touches, transforming the landscape into a magical wonderland. Whether you are on a beach, atop a mountain, or simply in your backyard, sunsets offer a serene and calming experience, providing a moment of peace and reflection in our busy lives.',
    'Stay updated with the latest trends in technology and discover innovations that are shaping the future. From artificial intelligence and machine learning to blockchain and quantum computing, the tech industry is evolving at a rapid pace. These advancements are not only revolutionizing industries but also enhancing the quality of life. By staying informed about these trends, you can leverage new tools and technologies to drive growth, improve efficiency, and stay ahead of the competition. Embrace the future with an open mind and be prepared to adapt to the ever-changing landscape of technology.',
    'Learn valuable tips and tricks for maintaining a healthy lifestyle and enhancing your overall well-being. Health is wealth, and taking care of your physical, mental, and emotional health is crucial for a fulfilling life. This includes eating a balanced diet rich in nutrients, engaging in regular physical activity, getting enough sleep, managing stress effectively, and fostering positive relationships. Additionally, regular health check-ups and mindful practices such as meditation and yoga can significantly improve your quality of life. Make informed choices and create healthy habits that will benefit you in the long run.',
    'Embark on exciting adventures around the world with our comprehensive travel guide and make unforgettable memories. Traveling opens up a world of new experiences, cultures, and perspectives. Whether you are exploring bustling cities, tranquil countryside, or exotic destinations, each journey offers unique opportunities for learning and growth. Our travel guide provides you with all the information you need, from top destinations and must-see attractions to practical tips on accommodations, transportation, and local customs. Let your wanderlust guide you and immerse yourself in the beauty and diversity of our planet.',
    'Master the art of cooking with our expert tips and easy-to-follow recipes that will impress your friends and family. Cooking is not just about preparing meals; it is an art form that involves creativity, passion, and precision. From mastering basic techniques to experimenting with complex flavors and cuisines, there is always something new to learn in the culinary world. Our recipes are designed to cater to all skill levels, ensuring that you can create delicious and nutritious dishes with ease. Whether you are cooking for a special occasion or simply for everyday meals, our guidance will help you become a confident and skilled home chef.'
];
const IMAGE_URLS = [
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEYrZ54tZYc46x-2Uxo2FXF3AcrxMYJZFXzJ9sGRTTCA&s',
    'https://fjwp.s3.amazonaws.com/blog/wp-content/uploads/2015/12/09112429/work-life-balance-working-from-home-1024x513.jpg',
    'https://asset.gallup.com/p/WORKPLACEV9CMS/49821ce7-b62a-4bcb-9013-0a21bed58ed5.jpg',
    'https://www.shutterstock.com/image-photo/young-female-gardener-glasses-using-260nw-1674467302.jpg',
    'https://www.betterup.com/hubfs/Happy-collegues-working-on-project-together-workplace-environments.jpg'
];

const getRandomItem = (array) => array[Math.floor(Math.random() * array.length)];

const getRandomUser = (index) => ({
    user_id: `user-${index + 1}`,
    firstname: getRandomItem(FIRST_NAMES),
    lastname: getRandomItem(LAST_NAMES),
    user_image_url: getRandomItem(USER_IMAGES)
});

const getRandomContent = () => ({
    content_image_url: getRandomItem(IMAGE_URLS),
    content_title: getRandomItem(TITLES),
    content_subtitle: getRandomItem(SUBTITLES),
    created_at: getRandomDate(new Date(2020, 0, 1), new Date()),
    updated_at: getRandomDate(new Date(2020, 0, 1), new Date())
});

const getRandomDate = (start, end) => new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));

const generateRandomData = (n) => {
    const data = [];
    for (let i = 0; i < n; i++) {
        data.push({
            id: (i + 1).toString(),
            user: getRandomUser(i),
            content: getRandomContent()
        });
    }
    return data;
};

export default function getData() {
    const randomData = generateRandomData(10);
    return randomData;
}
