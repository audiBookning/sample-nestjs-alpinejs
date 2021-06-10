export function alpineModal() {
  const output = `
  <div x-data="{ open: true }">
    <button @click="open = true">Open Dropdown</button>

    <ul
        x-show="open"
        @click.away="open = false"
    >
        Static Message
    </ul>
  </div>  
  `;
  return output;
}

export function alpineModalWithMessage(openSate, message) {
  const output = `
  <div x-data="{ open: ${openSate} }">
    <button @click="open = true">Open Dropdown</button>

    <ul
        x-show="open"
        @click.away="open = false"
    >
        ${message}
    </ul>
  </div>  
  `;
  return output;
}
