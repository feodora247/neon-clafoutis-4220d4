import { createContext, useContext, useState, useEffect } from 'react'

const DonationContext = createContext(null)

export function DonationProvider({ children }) {
  const [pledges, setPledges] = useState(() => {
    try {
      const saved = localStorage.getItem('hopespring_pledges')
      return saved ? JSON.parse(saved) : []
    } catch {
      return []
    }
  })

  const [starredCauses, setStarredCauses] = useState(() => {
    try {
      const saved = localStorage.getItem('hopespring_starred')
      return saved ? JSON.parse(saved) : [1, 3]
    } catch {
      return [1, 3]
    }
  })

  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const [selectedCauseForDonation, setSelectedCauseForDonation] = useState(null)
  const [isVolunteerModalOpen, setIsVolunteerModalOpen] = useState(false)

  useEffect(() => {
    try {
      localStorage.setItem('hopespring_pledges', JSON.stringify(pledges))
    } catch (e) {
      console.error(e)
    }
  }, [pledges])

  useEffect(() => {
    try {
      localStorage.setItem('hopespring_starred', JSON.stringify(starredCauses))
    } catch (e) {
      console.error(e)
    }
  }, [starredCauses])

  const totalPledged = pledges.reduce((sum, item) => sum + item.amount, 0)
  const pledgeCount = pledges.length

  function addPledge(cause, amount, frequency = 'one-time', donorName = 'Anonymous Donor') {
    const newPledge = {
      id: `${cause.id}-${Date.now()}`,
      causeId: cause.id,
      title: cause.title,
      category: cause.category,
      amount: Number(amount),
      frequency,
      donorName,
      date: new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }),
      image: cause.image
    }
    setPledges(prev => [newPledge, ...prev])
    setIsDrawerOpen(true)
  }

  function removePledge(pledgeId) {
    setPledges(prev => prev.filter(p => p.id !== pledgeId))
  }

  function clearAllPledges() {
    setPledges([])
  }

  function toggleStar(causeId) {
    setStarredCauses(prev =>
      prev.includes(causeId) ? prev.filter(id => id !== causeId) : [...prev, causeId]
    )
  }

  function openDonationModal(cause = null) {
    setSelectedCauseForDonation(cause)
    setIsDrawerOpen(true)
  }

  return (
    <DonationContext.Provider
      value={{
        pledges,
        pledgeCount,
        totalPledged,
        addPledge,
        removePledge,
        clearAllPledges,
        starredCauses,
        toggleStar,
        isDrawerOpen,
        setIsDrawerOpen,
        selectedCauseForDonation,
        setSelectedCauseForDonation,
        openDonationModal,
        isVolunteerModalOpen,
        setIsVolunteerModalOpen
      }}
    >
      {children}
    </DonationContext.Provider>
  )
}

export function useDonation() {
  const context = useContext(DonationContext)
  if (!context) {
    throw new Error('useDonation must be used within a DonationProvider')
  }
  return context
}
