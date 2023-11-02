window.function = function(visitMaterialsRelation) {
    const allImages = [];
    visitMaterialsRelation.value.forEach(material => {
        const visitImages = material['visit images'];
        allImages.push(...visitImages);
    });
    return { result: allImages };
}
