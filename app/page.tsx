import * as motion from "motion/react-client";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-24">
      <motion.div
        initial={{ scale: 0.9 }}
        animate={{ scale: 1.2, transition: { duration: 2 } }}
      >
        <motion.div
          initial={{ rotate: 9 }}
          className="border p-4 border-slate-500 rounded-xl"
        >
          <h1 className="text-xl font-bold">Welcome to the App</h1>
        </motion.div>
      </motion.div>
    </div>
  );
}
