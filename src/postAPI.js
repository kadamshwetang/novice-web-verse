export const postStudentRegistration = async (studentData) => {
    try {
      const response = await fetch("http://localhost:8000/api/v1/student/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(studentData),
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error);
      }
  
      return response.json();
    } catch (error) {
      throw new Error("An error occurred during registration");
    }
  };
  