Simple script to check if JS is loaded
console.log("Portfolio website loaded successfully!");
document.addEventListener('DOMContentLoaded', function() {
    const downloadBtn = document.getElementById('download-cv-btn');

    if (downloadBtn) {
        downloadBtn.addEventListener('click', async function(e) {
            e.preventDefault();
            
            // Yahan apni CV file ka exact naam likhein jo aapne GitHub par upload ki hai
            const cvUrl = 'cv.pdf'; 
            
            // Download hone ke baad file ka jo naam user ke computer par save hoga
            const fileName = 'Tariq_Wali_Khan_CV.pdf'; 
            
            try {
                const response = await fetch(cvUrl);
                if (!response.ok) throw new Error('CV file nahi mil saki');
                
                const blob = await response.blob();
                const blobUrl = window.URL.createObjectURL(blob);
                
                const link = document.createElement('a');
                link.href = blobUrl;
                link.download = fileName;
                document.body.appendChild(link);
                link.click();
                
                document.body.removeChild(link);
                window.URL.revokeObjectURL(blobUrl);
            } catch (error) {
                console.error('Download mein error aya hai:', error);
                // Fallback: Agar fetch fail ho jaye toh direct link open ho jaye ga
                window.open(cvUrl, '_blank');
            }
        });
    }
});
