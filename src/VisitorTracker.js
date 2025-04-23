import { getDatabase, ref, get, set } from "firebase/database";
import { app } from "./firebase"; // Import Firebase config and initialization

const db = getDatabase(app);

const trackVisitor = async () => {
  const today = new Date();
  const dayName = today.toLocaleDateString("en-US", { weekday: "short" }); // Get current day name (Mon, Tue, etc.)
  const visitRef = ref(db, `visits/${dayName}`);

  try {
    const snapshot = await get(visitRef);
    const count = snapshot.exists() ? snapshot.val() : 0;
    await set(visitRef, count + 1); // Update visit count for the current day
    console.log(`Updated visit count for ${dayName}:`, count + 1);
  } catch (err) {
    console.error("Error tracking visitor:", err);
  }
};

export default trackVisitor;
