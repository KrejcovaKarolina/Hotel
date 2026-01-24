document.addEventListener('DOMContentLoaded', function () {
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link')
  const navbarToggler = document.querySelector('.navbar-toggler')
  const collapseNavbar = function () {
    if (window.innerWidth < 992) {
      const bsCollapse = new bootstrap.Collapse(navbarToggler.nextElementSibling, {
        toggle: false,
      })
      bsCollapse.hide()
    }
  }
  navLinks.forEach(function (link) {
    link.addEventListener('click', collapseNavbar)
  })
  document.querySelectorAll('.modal').forEach(function (modal) {
    modal.addEventListener('hide.bs.modal', function () {
      const memory = this.innerHTML
      this.innerHTML = memory
    })
  })
})

const arrivalInput = document.getElementById('dateOfArrival')
const departureInput = document.getElementById('dateOfDeparture')
const today = new Date()
const todayS = today.toISOString().split('T')[0]

arrivalInput.min = todayS
arrivalInput.value = todayS

const tomorrow = new Date()
tomorrow.setDate(tomorrow.getDate() + 1)
const tomorrowS = tomorrow.toISOString().split('T')[0]

departureInput.min = tomorrowS
departureInput.value = tomorrowS

arrivalInput.addEventListener('change', () => {
  const arrivalDate = new Date(arrivalInput.value)
  const nextDay = new Date()
  nextDay.setDate(arrivalDate.getDate() + 1)
  departureInput.value = nextDay.toISOString().split('T')[0]
})
departureInput.addEventListener('change', () => {
  if (departureInput.value <= arrivalInput.value) {
    const departureDate = new Date(departureInput.value)
    const prevDay = new Date()
    prevDay.setDate(departureDate.getDate() - 1)
    arrivalInput.value = prevDay.toISOString().split('T')[0]
  }
})

const btnsRoom = document.querySelectorAll('.room-btn')
const inputSelectRomm = document.getElementById('roomType')
btnsRoom.forEach((btnRoom) => {
  btnRoom.addEventListener('click', () => {
    inputSelectRomm.value = btnRoom.id
  })
})
