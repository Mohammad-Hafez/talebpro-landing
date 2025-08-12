import Image from "next/image"

interface QuestionsProps {
  dict: any
  lang: "en" | "ar"
}

export default function Questions({ dict, lang }: QuestionsProps) {
  const isRTL = lang === "ar"

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">{dict.questions.title}</h2>
        </div>

        <div className="relative">
          {/* Central illustration area */}
          <div className="flex justify-center items-center min-h-[500px] relative">
            {/* Large question mark */}
            <div className="absolute inset-0 flex justify-center items-center">
              <div className="w-32 h-32 bg-green-600 rounded-full flex items-center justify-center">
                <span className="text-6xl font-bold text-white">?</span>
              </div>
            </div>

            {/* Left character */}
            <div className={`absolute ${isRTL ? "right-8" : "left-8"} top-1/2 transform -translate-y-1/2`}>
              <div className="relative">
                <Image
                  src="/confused-student-question-marks.png"
                  alt="Confused student"
                  width={150}
                  height={200}
                  className="rounded-lg"
                />
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                  <span className="text-4xl">?</span>
                </div>
              </div>
            </div>

            {/* Right character */}
            <div className={`absolute ${isRTL ? "left-8" : "right-8"} top-1/2 transform -translate-y-1/2`}>
              <div className="relative">
                <Image
                  src="/thoughtful-student-questions.png"
                  alt="Thoughtful student"
                  width={150}
                  height={200}
                  className="rounded-lg"
                />
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                  <span className="text-4xl">?</span>
                </div>
              </div>
            </div>
          </div>

          {/* Question bubbles */}
          <div className="absolute inset-0 pointer-events-none">
            {dict.questions.questions.map((question: string, index: number) => {
              const positions = ["top-4 left-4", "top-4 right-4", "bottom-4 left-4", "bottom-4 right-4"]

              return (
                <div key={index} className={`absolute ${positions[index]} bg-white p-3 rounded-lg shadow-lg max-w-xs`}>
                  <p className="text-sm font-medium text-gray-700">{question}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
