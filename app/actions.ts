"use server"

export async function notifySignup(formData: FormData) {
  const email = formData.get("email") as string

  if (!email) {
    return { success: false, error: "Email is required" }
  }

  try {
    // For now, we'll log the signup and return success
    // You can later integrate with an email service
    console.log("New signup:", {
      email,
      timestamp: new Date().toISOString(),
      source: "EdTechie Under Construction Page",
    })

    // Simulate email sending (replace with actual email service later)
    await new Promise((resolve) => setTimeout(resolve, 1000))

    return {
      success: true,
      message: "Thank you for signing up! We'll notify you when we launch.",
    }
  } catch (error) {
    console.error("Error in notifySignup:", error)
    return { success: false, error: "Failed to sign up. Please try again." }
  }
}
