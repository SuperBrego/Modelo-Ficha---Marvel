function countPowerBlocksWithStrictOverflow(container, blocks) {
    let count = 0;
    
    for (let i = 0; i < blocks.length; i++) {
        
        // Adicionar o bloco permanentemente
        container.appendChild(blocks[i]);

        // Verificar imediatamente se o overflow ocorreu
        if (isOutOfParent(container, blocks[i])) {
            // Se houver overflow, remover o último bloco adicionado
            container.removeChild(blocks[i]);
            console.log(`O overflow ocorreu ao tentar adicionar o bloco número ${i + 1}`);
            break;
        }
        
        count++;
    }
    
    return count;
}

function isOutOfParent(container, element) {
    const elementRect = element.getBoundingClientRect();
    const parentRect = container.getBoundingClientRect();
    
    return (
      elementRect.top < parentRect.top || 
      elementRect.left < parentRect.left || 
      elementRect.bottom > parentRect.bottom || 
      elementRect.right > parentRect.right
    );
  }
  