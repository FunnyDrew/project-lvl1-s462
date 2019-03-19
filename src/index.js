import readlineSync from 'readline-sync'

export default  question => {
    const answer = readlineSync.question(question + ' ');
    const guestGreeting = `Hello, ${answer}!`;
    console.log(guestGreeting);
}
