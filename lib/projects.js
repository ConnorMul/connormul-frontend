
export const allProjects = [
    {
        id: '1',
        name: 'Festie',
        description: 'Hey Festie! Festie is built with a React Frontend and a Ruby on Rails Backend. It is your resource for all things festival. View available fests, save them for later, review them and see what friends are posting!',
        date: '2023-09-01',
        image: '/festie.png',
        builtWith: ['React', 'Ruby on Rails'],
        frontend: 'https://www.github.com/connormul/festie-frontend',
        backend: 'https://www.github.com/connormul/festie-backend'
    },
    {
        id: '2',
        name: 'Celebnb',
        description: 'Celebnb is a web application that allows users to search for celebrity homes available as vacation rentals and review them.',
        date: '2023-09-01',
        image: '/celeb3.png',
        builtWith: ['Javascript', 'Ruby on Rails'],
        frontend: 'https://www.github.com/connormul/celebnb-frontend',
        backend: 'https://www.github.com/connormul/celebnb-backend'
    },
    {
        id: '3',
        name: 'Rate My Instructor',
        description: 'Rate My Instructor is built on Vanilla Javascript frontend and a Ruby on Rails backend. A modern, fun take on "Rate My Professor". Designed to give users the ability to leave comments about instructors, add new instructors and like reviews.',
        image: '/rate-my-instructor.png',
        builtWith: ['React', 'Ruby on Rails'],
        date: '2023-09-01',
        frontend: 'https://www.github.com/connormul/rate-my-instructor-frontend',
        backend: 'https://www.github.com/connormul/rate-my-instructor-backend'
    }
]

export async function getProjects() {
    const res = await fetch('https://api.github.com/users/connormul/repos?sort=created')
    const json = await res.json()
    console.log(json)
    return json
}