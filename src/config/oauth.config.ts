

  export const OAUTH: string = newFunction();
  
  function newFunction(): string {
        // API Section
    const CLIENT='69af424226e15a6396dd';
    const SECRET='683d05837403207f247939ab21668065352b65db';
    const OAUTH = '?client_id='+CLIENT+'&client_secret='+SECRET;
    return OAUTH;
  }
  