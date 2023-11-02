window.function = function (relation) {
    const allImages = [];
    relation.value.forEach(material => {
        const visitImages = material['visit images'];
        allImages.push(...visitImages);
    });
    return { result: allImages };
}
