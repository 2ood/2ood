<listchip>
    <slot></slot>
</listchip>
  
  <style>
    listchip {
      display: flex;
      flex-direction: column;
      justify-content: center;
  
      background-color: var(--color-gray-background);
      border-radius: 10px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      color: var(--color-blue-primary);
  
      padding: 1rem;
      gap: 0.5rem;
      margin: 0.5rem;
  
      /* Responsive sizing */
      width: 100%;
      max-width: 400px;
      min-width: 0;
  
      transition: transform 0.3s ease;
    }
  
    listchip:hover {
      transform: translateY(-4px);
    }
  
    @media (max-width: 768px) {
      listchip {
        padding: 0.75rem;
        max-width: 90%;
        margin: 0.5rem auto;
      }
    }

    @media (prefers-color-scheme: dark) {
        ::slotted(h3) {
            color : var(--color-background);
        }
    }
  </style>
  