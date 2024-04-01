// "use client";

// import QuizCard, { SkeletonCard } from "@/components/QuizCard";
// import AXIOS from "@/lib/axiosHelper";
// import { QuizType } from "@/types";
// import useSWR from "swr";

// const QuizCards = () => {
//   const {
//     data: quizzes,
//     error,
//     isLoading,
//   } = useSWR(process.env.NEXT_PUBLIC_WEB_URL, AXIOS.fetchQuiz);

//   if (error) {
//     return <div>Failed to load</div>;
//   }

//   if (isLoading) {
//     return (
//       <div className="grid my-12 flex-wrap gap-12 grid-cols-1 justify-center sm:grid-cols-2 lg:grid-cols-3">
//         <SkeletonCard />
//         <SkeletonCard />
//         <SkeletonCard />
//         <SkeletonCard />
//       </div>
//     );
//   }

//   if (quizzes) {
//     return (
//       <>
//         <h1 className="scroll-m-20 my-7 sm:text-4xl text-2xl">
//         Question Your Exitance
//         </h1>
//         <div className="grid flex-wrap gap-12 grid-cols-1 place-content-center place-items-center sm:place-items-stretch sm:grid-cols-2 lg:grid-cols-3">
//           {quizzes.length > 0 ? (
//             quizzes.map((quiz: QuizType) => (
//               <QuizCard key={quiz._id} quiz={quiz} />
//             ))
//           ) : (
//             <h1>No categories</h1>
//           )}
//         </div>
//       </>
//     );
//   }
// };

// export default QuizCards;




import React from 'react'
import { QuizType } from '@/types'
import { Button } from "@/components/ui/button";

type QuizCardProps = {
    quiz: QuizType;
  };

const QuizCards = (props: QuizCardProps) => {
    return (
        <div className='flex flex-col'>
            <div className='flex flex-col items-center justify-center'>
                <h1 className='text-2xl sm:text-4xl'>Question Your Exitance</h1>
                <p className='text-base text-muted-foreground'>Are you a real swifty...? I don&apos;t think so.</p>
            </div>
            <div className='grid sm:grid-cols-3 grid-cols-1 gap-10 pt-5'>
                <div className='flex flex-col bg-[#d9d9d9] sm:h-[320px] h-[300px] rounded-md justify-center items-center p-5'>
                    <img src="" alt="" className='rounded-full w-1/3' />
                    <h1 className='text-lg'>{props.quiz.name}</h1>
                    <p className='text-md align-middle'>{props.quiz.description}</p>
                    <Button>Start quiz</Button>
                </div>
            </div>
        </div>
    )
}

export default QuizCards;