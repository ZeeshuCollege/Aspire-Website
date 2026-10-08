/**
 * In-memory session state management for Enquiry submissions.
 * Holds submission state in JavaScript runtime memory so it persists across 
 * client-side route transitions and modal closures, but resets cleanly when 
 * the user refreshes or reloads the website.
 */

let sessionEnquirySubmitted = false;
let sessionSubmittedData = null;

export const hasSessionEnquirySubmitted = () => sessionEnquirySubmitted;

export const getSessionSubmissionDetails = () => sessionSubmittedData;

export const markSessionEnquirySubmitted = (data) => {
  sessionEnquirySubmitted = true;
  sessionSubmittedData = data ? { ...data } : null;
};

// For testing purposes only
export const _resetSessionEnquiryForTesting = () => {
  sessionEnquirySubmitted = false;
  sessionSubmittedData = null;
};

/**
 * Forwards enquiry form data to aspirelearningcentre@outlook.com formatted as a table.
 * Uses FormSubmit's native table template engine (_template: "table").
 */
export const forwardEnquiryToEmail = async (data, source = 'Enquire Now Modal') => {
  const recipientEmail = 'aspirelearningcentre@outlook.com';
  const endpoint = `https://formsubmit.co/ajax/${recipientEmail}`;

  const payload = {
    _subject: `New Admission Enquiry: ${data.studentName || 'Student'} (${data.course || data.interestedCourse || 'General'})`,
    _template: 'table',
    _captcha: 'false',
    'Student Name': data.studentName || 'N/A',
    'Parent / Guardian Name': data.parentName || 'N/A',
    'Mobile Number': data.phone || 'N/A',
    'Email Address': data.email?.trim() || 'Not provided',
    'Interested Course': data.course || data.interestedCourse || 'N/A',
    'Preferred Batch Slot': data.batchTiming || 'N/A',
    'Current Class / Grade': data.currentClass || 'N/A',
    'Board / School': data.board || data.previousSchool || 'N/A',
    'Questions / Remarks': data.message?.trim() || 'None',
    'Form Source': source,
    'Submission Date & Time': new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })
  };

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      console.warn(`Enquiry dispatch status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    // Fail-safe: Network errors or adblockers will not disrupt user experience
    console.warn('Enquiry forwarding network fallback:', error);
    return null;
  }
};
