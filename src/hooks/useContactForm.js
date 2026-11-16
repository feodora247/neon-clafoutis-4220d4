import { useState } from 'react'

function validateFields(values) {
  const errors = {}

  if (!values.fullName.trim()) {
    errors.fullName = 'Full Name is required.'
  } else if (values.fullName.trim().length < 3) {
    errors.fullName = 'Name must be at least 3 characters long.'
  }

  if (!values.email.trim()) {
    errors.email = 'Email address is required.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = 'Please provide a valid email address (e.g. name@domain.com).'
  }

  if (!values.subject.trim()) {
    errors.subject = 'Please specify a subject or area of interest.'
  }

  if (!values.message.trim()) {
    errors.message = 'Message content is required.'
  } else if (values.message.trim().length < 20) {
    errors.message = 'Please provide at least 20 characters so we can assist effectively.'
  }

  return errors
}

export function useContactForm(initialValues = {}) {
  const [formData, setFormData] = useState({
    fullName: initialValues.fullName || '',
    email: initialValues.email || '',
    phone: initialValues.phone || '',
    subject: initialValues.subject || '',
    programInterest: initialValues.programInterest || 'General Inquiry',
    message: initialValues.message || '',
    roleInterest: initialValues.roleInterest || 'Donor'
  })

  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))

    if (errors[name]) {
      setErrors(prev => {
        const next = { ...prev }
        delete next[name]
        return next
      })
    }
  }

  const handleSubmit = async (e) => {
    if (e && e.preventDefault) e.preventDefault()
    const validationErrors = validateFields(formData)

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return false
    }

    setIsSubmitting(true)

    // Simulate reliable API submission
    await new Promise(resolve => setTimeout(resolve, 1100))

    setIsSubmitting(false)
    setIsSuccess(true)
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      subject: '',
      programInterest: 'General Inquiry',
      message: '',
      roleInterest: 'Donor'
    })
    setErrors({})
    return true
  }

  const resetForm = () => {
    setIsSuccess(false)
    setErrors({})
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      subject: '',
      programInterest: 'General Inquiry',
      message: '',
      roleInterest: 'Donor'
    })
  }

  return {
    formData,
    errors,
    isSubmitting,
    isSuccess,
    handleChange,
    handleSubmit,
    resetForm,
    setFormData
  }
}
