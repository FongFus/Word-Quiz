const quizData = [
    {
        question: "Câu 1: Để định dạng văn bản in đậm, bạn nhấn phím nào?",
        a:"Ctrl + B",
        b:"Ctrl + I",
        c:"Ctrl + U",
        d:"Ctrl + Shift + A",
        correct:"a",
    },
    {
        question: "Câu 2: Để định dạng văn bản nghiêng, bạn nhấn phím nào?",
        a:"Ctrl + B",
        b:"Ctrl + I",
        c:"Ctrl + U",
        d:"Ctrl + Shift + A",
        correct:"b",  
    },
    {
        question: "Câu 3: Để tạo danh sách liệt kê, bạn nhấn phím nào?",
        a:"Ctrl + L",
        b:"Ctrl + I",
        c:"Ctrl + U",
        d:"Ctrl + Shift + A",
        correct:"a",  
    },
    {
        question: "Câu 4: Để chèn một hình ảnh vào tài liệu, bạn thực hiện thao tác nào?",
        a:"Vào tab Design, chọn Picture",
        b:"Vào tab Home, chọn Picture",
        c:"Vào tab Layout, chọn Picture",
        d:"Vào tab Insert, chọn Picture",
        correct:"d",  
    },
    {
        question: "Câu 5: Để tạo một bảng, bạn thực hiện thao tác nào?",
        a:"Vào tab Home, chọn Table",
        b:"Vào tab Insert, chọn Table",
        c:"Vào tab Layout, chọn Table",
        d:"Vào tab Design, chọn Table",
        correct:"b",  
    },
    {
        question: "Câu 6: Để căn chỉnh văn bản sang trái, bạn nhấn phím nào?",
        a:"Ctrl + L",
        b:"Ctrl + I",
        c:"Ctrl + U",
        d:"Vào tab Design, chọn Table",
        correct:"a",  
    },
    {
        question: "Câu 7: Để căn chỉnh văn bản sang phải, bạn nhấn phím nào?",
        a:"Ctrl + L",
        b:"Ctrl + R",
        c:"Ctrl + U",
        d:"Vào tab Home, chọn Font Size",
        correct:"b",  
    },
    {
        question: "Câu 8: Để căn chỉnh văn bản giữa, bạn nhấn phím nào?",
        a:"Tất cả các câu đều đúng",
        b:"Ctrl + R",
        c:"Ctrl + E",
        d:"Ctrl + Shift + A",
        correct:"c",  
    },
    {
        question: "Câu 9: Để căn chỉnh văn bản đều nhau, bạn nhấn phím nào?",
        a:"Tất cả các câu đều đúng",
        b:"Ctrl + R",
        c:"Ctrl + J",
        d:"Ctrl + Shift + A",
        correct:"c",  
    },
    {
        question: "Câu 10: Để thay đổi cỡ chữ, bạn thực hiện thao tác nào?",
        a:"Vào tab Design, chọn Font Size",
        b:"Ctrl + R",
        c:"Vào tab Layout, chọn Font Size",
        d:"Vào tab Home, chọn Font Size",
        correct:"d",  
    },
    {
        question: "Câu 11: Để thay đổi màu chữ, bạn thực hiện thao tác nào?",
        a:"Vào tab Design, chọn Font Color",
        b:"Vào tab Layout, chọn Font Color",
        c:"Vào tab Home, chọn Font Color",
        d:"Vào tab Home, chọn Font Size",
        correct:"c",  
    },
    {
        question: "Câu 12: Để chèn một đường viền cho văn bản, bạn thực hiện thao tác nào?",
        a:"Vào tab Design, chọn Font Color",
        b:"Vào tab Layout, chọn Font Color",
        c:"Vào tab Home, chọn Font Color",
        d:"Vào tab Home, chọn Borders",
        correct:"d",  
    },
    {
        question: "Câu 13: Để chèn một nền cho văn bản, bạn thực hiện thao tác nào?",
        a:"Vào tab Home, chọn Background",
        b:"Vào tab Layout, chọn Font Color",
        c:"Vào tab Home, chọn Font Color",
        d:"Vào tab Home, chọn Borders",
        correct:"a",  
    },
    {
        question: "Câu 14: Để bảo vệ tài liệu khỏi bị chỉnh sửa, bạn thực hiện thao tác nào?",
        a:"Vào tab Review, chọn Protect Document",
        b:"Vào tab Layout, chọn Font Color",
        c:"Vào tab Home, chọn Font Color",
        d:"Vào tab Design, chọn Protect Document",
        correct:"a",  
    },
    {
        question: "Câu 15: Để in tài liệu, bạn thực hiện thao tác nào?",
        a:"Vào tab Review, chọn Protect Document",
        b:"Vào tab Home, chọn Print",
        c:"Vào tab Home, chọn Font Color",
        d:"Vào tab Design, chọn Protect Document",
        correct:"b",  
    },
];

const quiz=document.getElementById('quiz');
const answerEls=document.querySelectorAll('.answer');
const questionEl=document.getElementById('question');
const a_text=document.getElementById('a_text');
const b_text=document.getElementById('b_text');
const c_text=document.getElementById('c_text');
const d_text=document.getElementById('d_text');
const submitBtn=document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz()

function loadQuiz(){
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText=currentQuizData.question
    a_text.innerText=currentQuizData.a;
    b_text.innerText=currentQuizData.b;
    c_text.innerText=currentQuizData.c;
    d_text.innerText=currentQuizData.d;
}

function deselectAnswers(){
    answerEls.forEach(answerEl=>answerEl.checked=false)
}

function getSelected(){
    let answer
    answerEls.forEach(answerEl =>{
        if(answerEl.checked){
            answer=answerEl.id
        }
    })
    return answer
}

submitBtn.addEventListener('click',()=>{
    const answer = getSelected();
    if(answer){
        if (answer===quizData[currentQuiz].correct){
            score++
        }
        currentQuiz++

        if(currentQuiz < quizData.length){
            loadQuiz()
        }
        else{
            quiz.innerHTML=`
            <h2>Bạn trả lời đúng ${score}/${quizData.length} câu hỏi</h2>

            <button onclick="location.reload()">Làm lại</button>
            `
        }
    }
})