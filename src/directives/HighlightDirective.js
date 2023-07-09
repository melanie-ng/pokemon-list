const highlightDirective = {
    mounted(el, binding) {
        if (binding.value == "obtained") {
            // green for "obtained"
            el.style.backgroundColor = "#d1e7dd";
        } else {
            // red for "unobtained"
            el.style.backgroundColor = "#eccccf";
        }
    },
    updated(el, binding) {
        // repeated code as the colors need to be updated when the binding value changes
        if (binding.value == "obtained") {
            el.style.backgroundColor = "#d1e7dd";
        } else {
            el.style.backgroundColor = "#eccccf";
        }
    }
}

export default highlightDirective;